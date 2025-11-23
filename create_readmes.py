import os

projects = {
    "krishna_cafe": {"title": "Krishna Cafe", "url": "https://krishnacafesample.pages.dev/"},
    "krishna_ecom": {"title": "Krishna E-commerce", "url": "https://krishnaecomsample.pages.dev/"},
    "krishna_model": {"title": "Krishna Models", "url": "https://krishnamodelsample.pages.dev/"},
    "krishna_model2": {"title": "Krishna Models 2", "url": "https://krishnamodelsample1.pages.dev/"},
    "krishna_ecom2": {"title": "Krishna E-commerce 2", "url": "https://krishnaecomsample2.pages.dev/"},
    "krishna_mehandi": {"title": "Krishna Mehandi", "url": "https://krishnamehandisample.pages.dev/"},
    "krishna_jewellery": {"title": "Krishna Jewellery", "url": "https://krishnajewelsample.pages.dev/"},
    "krishna_bakery": {"title": "Krishna Bakery", "url": "https://krishnabakerysample.pages.dev/"},
    "krishna_makeup": {"title": "Krishna Makeup Artist", "url": "https://krishnaartistsample.pages.dev/"},
    "krishna_shoes": {"title": "Krishna Shoes", "url": "https://krishnashoessample.pages.dev/"},
    "krishna_restro": {"title": "Krishna Restaurant", "url": "https://krishnarestrosample.pages.dev/"}
}

base_path = "/Users/bhanupratapsaini/GitHub/samples"

for folder, data in projects.items():
    readme_path = os.path.join(base_path, folder, "README.md")
    content = f"""# {data['title']}

A sample website for {data['title']}.

## Live Demo
[Visit Website]({data['url']})

## Screenshots
![Screenshot](public/screenshot.png)
"""
    with open(readme_path, "w") as f:
        f.write(content)
    print(f"Created README.md for {folder}")
