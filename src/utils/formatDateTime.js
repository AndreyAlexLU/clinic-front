// @flow

export default function formatDateTime(date: Date) {
    if (date) {
        date = new Date(date);
        
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
        
        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        
        let yy = date.getFullYear();
        
        let hh = date.getHours();
        if (hh < 10) hh = '0' + hh;
    
        let min = date.getMinutes();
        if (min < 10) min = '0' + min;
        
        return `${dd}.${mm}.${yy} в ${hh}:${min}`;
    }
}
