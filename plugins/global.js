import moment from 'moment';
var philippines = require('philippines')
export default ({ app }, inject) => {

    inject('FormatPrice', value => {
        let val = (value / 1).toFixed(2).replace(",", ".");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }),
    inject('StatusColor', value => {
        if (value == "Rejected") {
            return "background-color:#FFCCCC;border-radius:15px;padding:7px; width:150px; color: #344557; ";
        } else if (value == "Confirmed") {
            return "background-color:#CCFFCE;border-radius:15px;padding:7px; width:150px; color: #344557;";
        } else if (value == "Request For Cancellation") {
            return "background-color:#CCEBFF;border-radius:15px;padding:7px; width:150px; color: #344557;";
        } else if (value == "Pending") {
            return "background-color:#FFF5CC;border-radius:15px;padding:7px; width:150px; color: #344557;";
        } else if (value == "Cancelled") {
            return "border-radius:15px;padding:7px; width:150px; color: #344557;";
        }
        else if (value == "To Pay") {
            return "border-radius:15px;padding:7px; width:150px; color: green;";
        }
        else if (value == "Done") {
            return "border-radius:15px;padding:7px; width:150px; color: black; background-color:yellow;";
        }
    }),
    inject('FormatDate', value => {
        return moment(String(value)).format('YYYY-MM-DD')
    })
    inject('Location', value => {
        location = `${value}`
        return
    })
    inject('provinces', value => {
        return philippines.provinces
    })
    inject('cities', value => {
        if (value == '') return []
        if (value != 'Province') return philippines.cities.filter(item => item.province == (philippines.provinces.filter(item => item.name == value)[0].key))
        else return []

    }),
        inject('NDays', (date) => {
            return Math.round((moment(date[1]) - moment(date[0])) / (1000 * 60 * 60 * 24));
        })

}