public enum Couleur{
    COEUR("\u2665"),
    PIQUE("\u2660"),
    TREFLE("\u2663"),
    CARREAU("\u2666");

    private String unicode;

    Couleur(String unicode){
        this.unicode = unicode;
    }

    public String toString(){
        return unicode;
    }
}