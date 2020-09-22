use std::convert::TryInto;

pub fn is_armstrong_number(num: u32) -> bool {
    let number_string = num.to_string();
    let length_of_number_string = number_string.len();
    let each_digit_powered: u32 = number_string
        .chars()
        .map(|d| {
            d.to_digit(10)
                .unwrap()
                .pow(length_of_number_string.try_into().unwrap())
        })
        .sum();

    each_digit_powered == num
}
