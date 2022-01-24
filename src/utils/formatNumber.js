// function numberFormat(number){
//         //Intl = API dari browser
//         const formatNumbering = new Intl.NumberFormat("id-ID");
//         return formatNumbering.format(number);

export default(number) => {
        //Intl = API dari browser
        const formatNumbering = new Intl.NumberFormat("id-ID");
        return formatNumbering.format(number);
    }

    