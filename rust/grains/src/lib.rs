pub fn square(s: u32) -> u64 {
    match s > 0 && s <= 64 {
        true => 1 << (s - 1),
        false => panic!("Square must be between 1 and 64"),
    }
}

pub fn total() -> u64 {
    (2..=64).fold(0, |acc, x| acc + square(x)) + 1
    // snazzier solution: u64::max_value()
}
