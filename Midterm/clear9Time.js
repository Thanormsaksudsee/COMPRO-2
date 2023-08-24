function digitalClock(time){
    const hour = Math.floor(time/3600);
    const min = Math.floor((time%3600) /60 );

    const sec = time % 60
    const formattedTime = `${hour} hour${hour !== 1 ? 's' : ''} ${min} mine${min !== 1 ? 's' : ''} ${sec} secs${sec !== 1 ? 's' : ''}`;
    

    return formattedTime
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));