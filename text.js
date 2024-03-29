let text_element = document.querySelector(".text");
let text_array = text_element.innerHTML.split("");
let text_array_slice = text_element.innerHTML.split(" ");
let text_len = text_array.length;
let factor = 99;
let add = 0.52;


const word_len = text_array_slice.map((word) => {
    return word.length;
})

console.log(word_len);

let timings = {
    easing: `steps(${Number(word_len[0] + 1)}, end)`,
    delay: 100,
    duration: 400,
    fill: 'forwards'
}

let cursor_timings = {
    duration: 1000,
    iterations: Infinity,
    easing: 'cubic-bezier(0,.26,.44,.93)'
}

document.querySelector(".text_cursor").animate([
    {
        opacity: 0
    },
    {
        opacity: 0, offset: 0.7
    },
    {
        opacity: 1
    }
], cursor_timings);

if(text_array_slice.length == 1){
    timings.easing = `steps(${Number(word_len[0])}, end)`;

    document.querySelector(".text_hide").animate([
        { left: '0%' },
        { left: `${(factor / text_len) * (word_len[0])}%` }
    ], timings);

    document.querySelector(".text_cursor").animate([
        { left: '0%' },
        { left: `${(factor / text_len) * (word_len[0])}%` }
    ], timings);
} else{
    document.querySelector(".text_hide").animate([
        { left: '0%' },
        { left: `${(factor / text_len) * (word_len[0] + add)}%` }
    ], timings);

    document.querySelector(".text_cursor").animate([
        { left: '0%' },
        { left: `${(factor / text_len) * (word_len[0] + add)}%` }
    ], timings);
}

console.log('for')
for (let i = 1; i < text_array_slice.length; i++) {
    console.log('word len: ', word_len);
    console.log('text_array_slice: ', text_array_slice.length);
    const single_word_len = word_len[i];
    console.log('single_world_len: ', single_word_len);

    if (i == 1) {
        var left_instance = (factor / text_len) * (word_len[i - 1] + add);
        console.log(left_instance);
    }

    let timings_2 = {
        easing: `steps(${Number(single_word_len + 1)}, end)`,
        delay: (2 * (i + 1) + (2 * i)) * (330),
        // delay: ((i*2)-1)*1000,
        duration: 330,
        fill: 'forwards'
    }

    if (i == (text_array_slice.length - 1)) {
        timings_2.easing = `steps(${Number(single_word_len)}, end)`;
        document.querySelector(".text_hide").animate([
            { left: `${left_instance}%` },
            { left: `${left_instance + ((factor / text_len) * (word_len[i] + 1))}%` }
        ], timings_2);

        document.querySelector(".text_cursor").animate([
            { left: `${left_instance}%` },
            { left: `${left_instance + ((factor / text_len) * (word_len[i] + 1))}%` }
        ], timings_2);
    } else {
        document.querySelector(".text_hide").animate([
            { left: `${left_instance}%` },
            { left: `${left_instance + ((factor / text_len) * (word_len[i] + add))}%` }
        ], timings_2);

        document.querySelector(".text_cursor").animate([
            { left: `${left_instance}%` },
            { left: `${left_instance + ((factor / text_len) * (word_len[i] + add))}%` }
        ], timings_2);
    }

    left_instance = left_instance + ((factor / text_len) * (word_len[i] + add));
}