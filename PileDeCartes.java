public class PileDeCartes {
    private final Carte[] pile = new Carte[52];
    private int sommet = -1;
    private int nbrElement = 0;

    public void ajouterCarte(Couleur couleur, Rang rang) {
        if(nbrElement<=52){
            pile[sommet] = new Carte(couleur, rang);
            sommet++;
            nbrElement++;
        }
    }

    public void supprimerCarte(){
        if(nbrElement>0){
            pile[sommet-1] = null;
            sommet--;
            nbrElement--;
        }
    }
}
