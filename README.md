# Clos de l'Écluse — site web

Site vitrine de la chambre d'hôtes **Clos de l'Écluse**, Boulevard de la Meuse 138, 5100 Jambes (Namur).

Site statique (HTML/CSS/JS, aucune dépendance), publié avec GitHub Pages.

## Structure

```
index.html   contenu de la page (textes, tarifs, contact)
style.css    mise en forme
script.js    menu mobile, galerie photo plein écran
images/      photos
```

## Modifier le site

- **Textes, tarifs, horaires** : tout se trouve dans `index.html`.
- **Changer les photos** : remplacer les fichiers dans `images/` en gardant le même nom
  (`terrasse-vue-meuse.jpg` = grande photo d'accueil, `chambre.jpg`, `vue-fenetres.jpg`).
  Pour **ajouter** une photo à la galerie, copier un bloc `<button class="gallery__item" ...>` dans la section `#galerie` de `index.html`.
  Conseil : des photos d'environ 1800 px de large, en JPG, pour un site rapide.

Chaque `git push` sur la branche `main` met le site à jour automatiquement (1 à 2 minutes).

## Voir le site en local

```bash
python -m http.server 8000
```

puis ouvrir http://localhost:8000
