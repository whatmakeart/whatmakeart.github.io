---
title: Text to Speech TTS
date: 2025-12-12T03:44:17
lastmod: 2025-12-15T05:45:33
---

## Open Source Text to Speech Models

### Chatterbox

Install Chatterbox on a Mac with the Terminal app.

1.  If you do not have homebrew installed, it is recommended to install it first. [How to Install Homebrew](../coding/install-homebrew.md).
2.  Make sure that ffmpeg is installed and libsndfile for saving sound files. After homebrew is installed, type the following into a new Terminal window.
    `brew install ffmpeg libsndfile`
3.  Create a directory and move into it by typing the following commands into Terminal.
    `mkdir chatterbox_project`
    `cd chatterbox_project`
4.  Create a virtual python environment with Python version 3.11. This helps keep the install clean by keeping everything in a `venv` container that is easy to delete without disturbing other python projects or the OS python installation. It also allows the use of Python version 3.11 even if you have a different version installed.
    `python@3.11 -m venv venv`
5.  Activate the python environment
    `source venv/bin/activate`
6.  Upgrade pip/setuptools/wheel
    `pip install --upgrade pip setuptools wheel`
7.  Install chatterbox
    `pip install chatterbox-tts`
8.  Create python file to hold Gradio Gui Code.
    'touch clone-gradio.py`
9.  Open the file in a text editor or code editor and paste in this python code. [^chatter-clone-gradio]

```python
import torch
import gradio as gr
from chatterbox.vc import ChatterboxVC


DEVICE = "cuda" if torch.cuda.is_available() else "cpu"


model = ChatterboxVC.from_pretrained(DEVICE)
def generate(audio, target_voice_path):
    wav = model.generate(
        audio, target_voice_path=target_voice_path,
    )
    return model.sr, wav.squeeze(0).numpy()


demo = gr.Interface(
    generate,
    [
        gr.Audio(sources=["upload", "microphone"], type="filepath", label="Input audio file"),
        gr.Audio(sources=["upload", "microphone"], type="filepath", label="Target voice audio file (if none, the default voice is used)", value=None),
    ],
    "audio",
)

if __name__ == "__main__":
    demo.launch()

```

10. Run the script
    `python clone-gradio.py`
11. Wait for the models to download, this can take a while.
12. Then go to the local URL address in terminal to use to clone voice for text to speech TTS.

### Add Emotion and Language Controls

13. For more options such as emotions or multiple languages you need to create a new python file.
14. To stop the current python file if it is still running in terminal. Click on the terminal window and press `control + C`.
15. Create new python file.
    `touch multi-gradio.py`
16. Open file in text editor and paste this code.

```python
import gradio as gr
import torch
import torchaudio
import tempfile
import os

# --- 🛠️ Mac PATCH START 🛠️ ---
# This fixes the "RuntimeError: Attempting to deserialize object on a CUDA device"
# It forces the model to load onto the CPU first, solving the Mac M1 incompatibility.
original_load = torch.load

def safe_load(*args, **kwargs):
    # If the library forgets to specify a device, force it to 'cpu'
    if 'map_location' not in kwargs:
        kwargs['map_location'] = 'cpu'
    return original_load(*args, **kwargs)

torch.load = safe_load
# --- 🛠️ Mac PATCH END 🛠️ ---

# Now we can safely import the library
from chatterbox.mtl_tts import ChatterboxMultilingualTTS

print("⏳ Loading Chatterbox Multilingual Model... (This downloads ~3GB on first run)")

# 1. Setup Device
if torch.backends.mps.is_available():
    device = "mps"
    print("✅ Using Apple Silicon GPU (MPS)")
else:
    device = "cpu"
    print("⚠️ MPS not available, using CPU")

# 2. Load the Multilingual Model
# The patch above ensures this line no longer crashes
model = ChatterboxMultilingualTTS.from_pretrained(device=device)
print("🚀 Model Ready!")

# 3. Define the Generator Function
def generate_advanced(text, language_code, voice_path, exaggeration, stability):
    if not text.strip():
        return None

    print(f"Generating ({language_code}): '{text[:20]}...' | Emotion: {exaggeration} | Stability: {stability}")

    # Handle the Voice Cloning Input
    prompt_path = voice_path if voice_path else None

    # GENERATE
    audio_tensor = model.generate(
        text,
        language_id=language_code,
        audio_prompt_path=prompt_path,
        exaggeration=exaggeration, # Controls emotion (0.0 - 1.0+)
        cfg_weight=stability       # Controls stability/pacing (0.0 - 1.0)
    )

    # Save to temp file for Gradio
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as fp:
        output_path = fp.name
        torchaudio.save(output_path, audio_tensor, model.sr)

    return output_path

# 4. Build the Interface
LANGUAGES = {
    "English": "en", "Spanish": "es", "French": "fr", "German": "de",
    "Italian": "it", "Japanese": "ja", "Chinese": "zh", "Russian": "ru",
    "Portuguese": "pt", "Polish": "pl", "Korean": "ko", "Dutch": "nl",
    "Turkish": "tr", "Arabic": "ar", "Hindi": "hi", "Swedish": "sv"
}

with gr.Blocks(title="Chatterbox Advanced") as demo:
    gr.Markdown("# Chatterbox Multilingual & Voice Cloning")

    with gr.Row():
        with gr.Column():
            text_input = gr.Textbox(
                label="Text to Speak",
                value="Hello! I can speak many languages with different emotions.",
                lines=3
            )

            lang_dropdown = gr.Dropdown(
                label="Language",
                choices=list(LANGUAGES.keys()),
                value="English",
                type="value"
            )

            audio_input = gr.Audio(label="Reference Voice (Optional - for cloning)", type="filepath")

            with gr.Accordion("Advanced Settings", open=True):
                exaggeration_slider = gr.Slider(
                    minimum=0.0, maximum=1.5, value=0.5, step=0.1,
                    label="Emotion / Exaggeration (Higher = More Dramatic)"
                )
                stability_slider = gr.Slider(
                    minimum=0.1, maximum=1.0, value=0.5, step=0.1,
                    label="Stability / Pacing (Lower = Faster/Looser)"
                )

            submit_btn = gr.Button("Generate Audio", variant="primary")

        with gr.Column():
            audio_output = gr.Audio(label="Result")

    def wrap_generate(text, lang_name, voice, exag, stab):
        code = LANGUAGES.get(lang_name, "en")
        return generate_advanced(text, code, voice, exag, stab)

    submit_btn.click(
        fn=wrap_generate,
        inputs=[text_input, lang_dropdown, audio_input, exaggeration_slider, stability_slider],
        outputs=audio_output
    )

if __name__ == "__main__":
    demo.launch()
```

16. Save the file and run it.
    `python multi-gradio.py`
17. Wait for more models to download and then type in the local URL displayed in terminal into a browser.

## References

[^chatter-clone-gradio]: [Chatterbot Gradio Voice Clone](https://github.com/resemble-ai/chatterbox/blob/master/gradio_vc_app.py)

```

```
