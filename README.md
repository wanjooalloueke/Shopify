# JD HAIR BOUTIQUE Shopify Theme

Thème Shopify Online Store 2.0 conçu pour **JD HAIR BOUTIQUE**, boutique premium de perruques à Abidjan, Côte d'Ivoire.

## Identité intégrée

- Nom: `JD HAIR BOUTIQUE`
- Slogan: `L'élégance commence par vos cheveux.`
- Couleurs: noir luxe `#000000`, or premium `#D4AF37`, blanc `#FFFFFF`
- Typographies: Playfair Display pour les titres, Poppins pour les textes

## Structure du thème

- `layout/theme.liquid`: structure globale Shopify
- `templates/*.json`: pages OS 2.0 modifiables dans l'éditeur Shopify
- `sections/*.liquid`: sections réutilisables
- `snippets/*.liquid`: composants courts, cartes produit, prix et icônes
- `assets/theme.css`: design complet
- `assets/theme.js`: menu mobile et variantes produit
- `assets/jd-hero.png`: visuel héro par défaut

## Menu principal recommandé

Créez un menu Shopify avec ces entrées:

- Accueil: `/`
- Boutique: `/collections/all`
- Nouveautés: `/collections/nouveautes`
- Promotions: `/collections/promotions`
- À Propos: `/pages/a-propos`
- FAQ: `/pages/faq`
- Contact: `/pages/contact`

Le thème affiche déjà ces liens en secours si aucun menu n'est configuré.

## Pages à créer dans Shopify

Dans Shopify Admin, créez ces pages et assignez le template correspondant:

- `À Propos`, handle `a-propos`, template `page.about`
- `FAQ`, handle `faq`, template `page.faq`
- `Contact`, handle `contact`, template `page.contact`

## Collections recommandées

Créez au minimum:

- `nouveautes`
- `promotions`
- `lace-wigs`
- `bob-carres`
- `longues`
- `ondulees`

Ajoutez des images de collection et des photos produit réelles pour renforcer l'effet marque premium.

## Connexion GitHub avec Shopify

1. Poussez ce dossier dans le dépôt GitHub connecté à Shopify.
2. Dans Shopify Admin, ouvrez **Online Store > Themes**.
3. Connectez ou sélectionnez le dépôt GitHub et la branche du thème.
4. Vérifiez l'aperçu, puis publiez quand les produits, menus et pages sont prêts.

## Personnalisation rapide

Dans l'éditeur Shopify:

- Remplacez l'image héro par une vraie photo de marque.
- Renseignez WhatsApp, téléphone, email et réseaux sociaux dans les paramètres du thème.
- Sélectionnez les collections à afficher sur l'accueil.
- Ajustez les textes des sections selon les offres et stocks réels.
