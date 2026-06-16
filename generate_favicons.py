from PIL import Image
import os

# Ensure the output directory exists
public_dir = "/Users/sajathahamed/.gemini/antigravity/scratch/digipeak-agency/public"
static_dir = "/Users/sajathahamed/.gemini/antigravity/scratch/outputs"
logo_path = os.path.join(public_dir, "logo.png")

if not os.path.exists(logo_path):
    print(f"Error: Could not find {logo_path}")
    exit(1)

# Open the original white logo with transparent background
try:
    logo = Image.open(logo_path).convert("RGBA")
except Exception as e:
    print(f"Failed to open logo: {e}")
    exit(1)

# Function to create an image with black background and centered logo
def create_icon(size, padding_ratio=0.15):
    # Create black background
    bg = Image.new("RGBA", (size, size), (0, 0, 0, 255))
    
    # Calculate logo size with padding
    logo_max_size = int(size * (1 - padding_ratio * 2))
    
    # Calculate aspect ratio preserving resize
    logo_aspect = logo.width / logo.height
    if logo_aspect > 1:
        new_w = logo_max_size
        new_h = int(logo_max_size / logo_aspect)
    else:
        new_h = logo_max_size
        new_w = int(logo_max_size * logo_aspect)
        
    # Resize logo
    resized_logo = logo.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Calculate paste position (center)
    paste_x = (size - new_w) // 2
    paste_y = (size - new_h) // 2
    
    # Paste logo using its alpha channel as mask
    bg.paste(resized_logo, (paste_x, paste_y), mask=resized_logo)
    
    # Convert back to RGB to save as format that might not support alpha if needed,
    # though for PNG RGBA is fine. We'll return RGBA for PNGs and convert to RGB for ICO if needed.
    return bg

# Define required sizes
icon_configs = [
    ("favicon-16x16.png", 16),
    ("favicon-32x32.png", 32),
    ("apple-touch-icon.png", 180),
    ("android-chrome-192x192.png", 192),
    ("android-chrome-512x512.png", 512),
]

# Generate PNG icons
generated_files = []
for filename, size in icon_configs:
    icon = create_icon(size)
    output_path = os.path.join(public_dir, filename)
    icon.save(output_path, format="PNG")
    generated_files.append(output_path)
    print(f"Generated {filename}")

# Generate favicon.ico (multi-size)
ico_path = os.path.join(public_dir, "favicon.ico")
ico_16 = create_icon(16)
ico_32 = create_icon(32)
ico_48 = create_icon(48)
ico_64 = create_icon(64)
# Save as ICO (must be RGBA for transparency, but we have black background)
ico_16.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)], append_images=[ico_32, ico_48, ico_64])
generated_files.append(ico_path)
print(f"Generated favicon.ico")

print("All favicon assets generated successfully.")
