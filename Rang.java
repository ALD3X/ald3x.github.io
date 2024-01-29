public enum Rang {
    DEUX(2),
    TROIS(3),
    QUATRE(4),
    CINQ(5),
    SIX(6),
    SEPT(7),
    HUIT(8),
    NEUF(9),
    DIX(10),
    VALET(11),
    DAME(12),
    ROI(13),
    AS(14);

    private int hauteur;

    Rang(int hauteur){
        this.hauteur = hauteur;
    }

    public int getRang(){
        return hauteur;
    }

    @Override
    public String toString() {
        if (hauteur >= 2 && hauteur <= 10) {
            return String.valueOf(hauteur);
        } else {
            switch (this) {
                case VALET:
                    return "Valet";
                case DAME:
                    return "Dame";
                case ROI:
                    return "Roi";
                case AS:
                    return "As";
                default:
                    return "";
            }
        }
    }
}
