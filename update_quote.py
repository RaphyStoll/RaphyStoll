import random
import os

# Lire les citations du fichier
with open("quotes.txt") as f:
    quotes = f.readlines()

# Choisir une citation au hasard
quote = random.choice(quotes).strip()

# Lire le README.md actuel
with open("README.md") as f:
    lines = f.readlines()

# Remplacer la section citation dans README.md
new_lines = []
for line in lines:
    if line.strip().startswith("> \""):
        new_lines.append(f"> \"{quote}\"\n")
    else:
        new_lines.append(line)

# Écrire le README.md mis à jour
with open("README.md", "w") as f:
    f.writelines(new_lines)

# Commit et push des changements
os.system("git config --global user.name 'github-actions[bot]'")
os.system("git config --global user.email '41898282+github-actions[bot]@users.noreply.github.com'")
os.system("git add README.md")
os.system("git commit -m 'Update inspirational quote'")
os.system("git push")
