public class Jeu {
    private final Carte[] cartes;

    public Jeu() {
        cartes = new Carte[52];
        
        int index = 0;
        for (Couleur couleur : Couleur.values()) {
            for (Rang hauteur : Rang.values()) {
                cartes[index] = new Carte(couleur,hauteur);
                index++;
            }
        }
    }

    public void afficheJeu() {
        for (Carte carte : cartes) {
            System.out.println(carte.toString());
        }
    }
}
