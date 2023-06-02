---
title: Stable Diffusion
---

```shellsession
git lfs install
git clone https://huggingface.co/CompVis/stable-diffusion-v1-4

// clone the repository

```

Fix pyenv

This fixed my zsh setup:

.zprofile

```
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
```

.zshrc

```
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

https://jordanthomasg.medium.com/python-development-on-macos-with-pyenv-virtualenv-ec583b92934c

## Activate Environment Automatically

As long as you followed the installation instructions and included the `eval "$(pyenv virtualenv-init -)"` line in your `~/.bash_profile`, `pyenv-virtualenv` has the ability to automatically activate/deactivate your environment for you.

Anytime you change directories, `pyenv` looks for a `.python-version` file and uses the specified Python version or virtual environment!

`cd` into your project directory and run:

pyenv local django-3.2

Notice that you now have a `.python-version` file in your project. The next time you `cd` into the project, `pyenv` will read this file and activate the `django-3.2` virtual environment for you!

```shellsession
# install brew (and Xcode command line tools):
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

#
# Now there are two different routes to get the Python (miniconda) environment up and running:
# 1. Alongside pyenv
# 2. No pyenv
#
# If you don't know what we are talking about, choose 2.
#
# NOW EITHER DO
# 1. Installing alongside pyenv

brew install pyenv-virtualenv # you might have this from before, no problem
pyenv install anaconda3-2022.05
pyenv virtualenv anaconda3-2022.05
eval "$(pyenv init -)"
pyenv activate anaconda3-2022.05

# OR,
# 2. Installing standalone
# install python 3, git, cmake, protobuf:
brew install cmake protobuf rust

# install miniconda (M1 arm64 version):
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh -o Miniconda3-latest-MacOSX-arm64.sh
/bin/bash Miniconda3-latest-MacOSX-arm64.sh

# EITHER WAY,
# continue from here

# clone the repo
git clone https://github.com/lstein/stable-diffusion.git
cd stable-diffusion

#
# wait until the checkpoint file has downloaded, then proceed
#

# create symlink to checkpoint
mkdir -p models/ldm/stable-diffusion-v1/

PATH_TO_CKPT="$HOME/Downloads"  # or wherever you saved sd-v1-4.ckpt

ln -s "$PATH_TO_CKPT/sd-v1-4.ckpt" models/ldm/stable-diffusion-v1/model.ckpt

# install packages
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env create -f environment-mac.yaml
conda activate ldm

# only need to do this once
python scripts/preload_models.py

# run SD!
python scripts/dream.py --full_precision  # half-precision requires autocast and won't work
```
