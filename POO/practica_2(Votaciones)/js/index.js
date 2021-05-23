class votaciones {
    favor = 0;
    contra = 0;
    abstencion = 0;

    votonmas(getbtn){
        console.log(getbtn);
        switch (getbtn) {
            case "btnFavor":
                this.favor++;
                break;
            case "btnContra":
                this.contra++;
                break;
            case "btn":
                this.abstencion++;
                break;
        }
        console.log(this.favor, this.contra, this.abstencion);
    }
}

