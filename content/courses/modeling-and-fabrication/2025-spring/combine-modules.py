import os
import re

# CONFIGURATION
# -----------------------------
# The folder where the script is located (assumed to be 2025-spring)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Where to save the new files
OUTPUT_DIR = os.path.join(BASE_DIR, "_COMBINED_MODULES")

def get_file_content(file_path, depth=0):
    """
    Reads a markdown file and recursively resolves embeds.
    Limit depth to prevent infinite loops.
    """
    if depth > 5:
        return f"\n> [Error: Embed depth exceeded for {os.path.basename(file_path)}]\n"

    if not os.path.exists(file_path):
        return f"\n> [Error: Embedded file not found: {file_path}]\n"

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return f"\n> [Error reading {file_path}: {e}]\n"

    # Regex to find standard Markdown embeds/images: ![AltText](path/to/file.md)
    # We specifically look for .md files in the parenthesis
    pattern = r'!\[.*?\]\((.*?\.md)\)'
    
    def replace_match(match):
        rel_path = match.group(1)
        # Resolve the relative path based on the CURRENT file's location
        current_dir = os.path.dirname(file_path)
        target_abs_path = os.path.abspath(os.path.join(current_dir, rel_path))
        
        # Recursively get content of the embedded file
        embedded_content = get_file_content(target_abs_path, depth + 1)
        
        return f"\n\n\n{embedded_content}\n\n\n"

    # Replace all found patterns with the actual content
    resolved_content = re.sub(pattern, replace_match, content)
    
    return resolved_content

def main():
    # Create output directory
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    # Get all subdirectories in the current folder
    subdirs = [d for d in os.listdir(BASE_DIR) if os.path.isdir(os.path.join(BASE_DIR, d))]
    
    # Filter for directories that start with a number (e.g., "01-technical...")
    module_dirs = sorted([d for d in subdirs if d[0].isdigit()])

    print(f"Found {len(module_dirs)} module folders. Processing...")

    for folder_name in module_dirs:
        folder_path = os.path.join(BASE_DIR, folder_name)
        
        # Get all markdown files in this module folder
        files = [f for f in os.listdir(folder_path) if f.endswith('.md') and not f.startswith('.')]
        # Sort them so 01-00 comes before 01-01
        files.sort()

        if not files:
            continue

        full_module_content = ""
        
        print(f"--> Processing: {folder_name} ({len(files)} files)")

        for filename in files:
            file_path = os.path.join(folder_path, filename)
            
            # Get content with embeds resolved
            content = get_file_content(file_path)
            
            # Append to master string with a separator
            full_module_content += f"\n\n---\n## Source: {filename}\n\n"
            full_module_content += content

        # Write the combined file
        output_filename = f"{folder_name}-combined.md"
        output_path = os.path.join(OUTPUT_DIR, output_filename)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(full_module_content)

    print("\n------------------------------------------------")
    print(f"Done! Check the folder: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()