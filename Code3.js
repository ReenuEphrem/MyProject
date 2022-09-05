var day='Sunday';

switch(day){
    
        case 'Sunday':
        console.log('Sunday')
        break
        case 'Monday':
        console.log('Monday')
        break
        case 'Tuesday':
        console.log('Tuesday')
        break
        case 'Wednesday':
        console.log('Wednesday')
        break
        case 'Thursday':
        console.log('Thursday')
        break
        case 'Friday':
        console.log('Friday')
        break
        case 'Saturday':
        console.log('Saturday')
        break
        default:
        console.log('Not a day')
        break
}


var date= new Date();
var dayname= date.getDay()
switch(dayname){
    
        case 0:
        console.log('Sunday')
        break
        case 1:
        console.log('Monday')
        break
        case 2:
        console.log('Tuesday')
        break
        case 3:
        console.log('Wednesday')
        break
        case 4:
        console.log('Thursday')
        break
        case 5:
        console.log('Friday')
        break
        case 6:
        console.log('Saturday')
        break
        default:
        console.log('Not a day')
        break
}
