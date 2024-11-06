/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return numbers;
    } else {
        const newarray = [numbers[0], numbers[numbers.length - 1]];

        return newarray;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((i) => i * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((i) => (isNaN(Number(i)) ? 0 : Number(i)));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newamount = amounts.map((i) => {
        const newi = i.replace(/^\$/, "");
        const numberamount = Number(newi);
        return isNaN(numberamount) ? 0 : numberamount;
    });
    return newamount;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newmessages = messages.filter((i) => !i.endsWith("?"));
    const newermessages = newmessages.map((i) =>
        i.endsWith("!") ? i.toUpperCase() : i,
    );
    return newermessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessfour = words.filter((i) => i.length < 4);

    return lessfour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const newlist = colors.every(
        (i) => i === "red" || i === "blue" || i === "green",
    );
    return newlist;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((total, i) => total + i, 0);
    const addendstostring = addends.join("+");

    return `${sum}=${addendstostring}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const insertindex = values.findIndex((value) => value < 0);

    const sum =
        insertindex === -1 ?
            values.reduce((acc, num) => acc + num, 0)
        :   values.slice(0, insertindex).reduce((acc, num) => acc + num, 0);

    if (insertindex === -1) {
        return [...values, sum];
    }

    return [
        ...values.slice(0, insertindex + 1),
        sum,
        ...values.slice(insertindex + 1),
    ];
}
