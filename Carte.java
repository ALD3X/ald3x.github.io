public class Carte {
    private final Couleur couleur;
    private final Rang rang;

    Carte(Couleur couleur, Rang rang){
        this.couleur = couleur;
        this.rang = rang;
    }

    public Rang getHauteur() {
        return rang;
    }

    public Couleur getCouleur() {
        return couleur;
    }

    @Override
    public String toString() {
        return rang.toString()+couleur.toString();
    }

    public static void main(String[] args) {
        Carte carte1 = new Carte(Couleur.CARREAU,Rang.AS);
        System.out.println(carte1.toString());

        Carte carte2 = new Carte(Couleur.CARREAU,Rang.CINQ);
        System.out.println(carte2.toString());
    }
}