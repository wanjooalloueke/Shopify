# Shopify

Boutique en ligne JD Hair.

# JD HAIR BOUTIQUE Shopify Theme

Theme Shopify Online Store 2.0 concu pour **JD HAIR BOUTIQUE**, boutique premium de perruques a Abidjan, Cote d'Ivoire.

## Identite integree

- Nom: `JD HAIR BOUTIQUE`
- Slogan: `L'elegance commence par vos cheveux.`
- Couleurs: noir luxe `#000000`, or premium `#D4AF37`, blanc `#FFFFFF`
- Typographies: Playfair Display pour les titres, Poppins pour les textes

## Structure du theme

- `layout/theme.liquid`: structure globale Shopify
- `templates/*.json`: pages OS 2.0 modifiables dans l'editeur Shopify
- `sections/*.liquid`: sections reutilisables
- `snippets/*.liquid`: composants courts, cartes produit, prix et icones
- `assets/theme.css`: design complet
- `assets/theme.js`: menu mobile et variantes produit
- `assets/jd-hero.png`: visuel hero par defaut

## Menu principal recommande

Creez un menu Shopify avec ces entrees:

- Accueil: `/`
- Boutique: `/collections/all`
- Nouveautes: `/collections/nouveautes`
- Promotions: `/collections/promotions`
- A Propos: `/pages/a-propos`
- FAQ: `/pages/faq`
- Contact: `/pages/contact`

Le theme affiche deja ces liens en secours si aucun menu n'est configure.

## Pages a creer dans Shopify

Dans Shopify Admin, creez ces pages et assignez le template correspondant:

- `A Propos`, handle `a-propos`, template `page.about`
- `FAQ`, handle `faq`, template `page.faq`
- `Contact`, handle `contact`, template `page.contact`
- `Paiement`, handle `paiement`, template `page.paiement`

La page `/pages/paiement` est l'etape ajoutee entre le panier et le checkout Shopify. Elle rappelle que le paiement se fait uniquement a la livraison, sauf expedition qui requiert le depot complet de l'article avant envoi.

## Collections recommandees

Creez au minimum:

- `nouveautes`
- `promotions`
- `lace-wigs`
- `bob-carres`
- `longues`
- `ondulees`

Ajoutez des images de collection et des photos produit reelles pour renforcer l'effet marque premium.

## Connexion GitHub avec Shopify

1. Poussez ce dossier dans le depot GitHub connecte a Shopify.
2. Dans Shopify Admin, ouvrez **Online Store > Themes**.
3. Connectez ou selectionnez le depot GitHub et la branche du theme.
4. Verifiez l'apercu, puis publiez quand les produits, menus et pages sont prets.

## Personnalisation rapide

Dans l'editeur Shopify:

- Remplacez l'image hero par une vraie photo de marque.
- Renseignez WhatsApp, telephone, email et reseaux sociaux dans les parametres du theme.
- Selectionnez les collections a afficher sur l'accueil.
- Ajustez les textes des sections selon les offres et stocks reels.

## Reglage paiement Shopify

Dans Shopify Admin, configurez le moyen de paiement manuel adapte, par exemple **Paiement a la livraison**. Le theme affiche les conditions et enregistre l'acceptation dans les attributs de commande, mais le moyen de paiement disponible dans le checkout reste gere par Shopify Admin.
