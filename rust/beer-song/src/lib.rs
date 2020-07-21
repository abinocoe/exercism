pub fn verse(n: u32) -> String {
    let leftover_plural;
    if n == 2 {
        leftover_plural = "bottle"
    } else {
        leftover_plural = "bottles"
    }
    match n {
        0 => "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
            .to_string(),
        1 => "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n"
            .to_string(),
        _ => format!(
            "{} bottles of beer on the wall, {} bottles of beer.\nTake one down and pass it around, {} {} of beer on the wall.\n",
            n,
            n,
            n - 1,
            leftover_plural
        ),
    }
}

pub fn sing(start: u32, end: u32) -> String {
    (end..=start)
        .rev()
        .map(verse)
        .collect::<Vec<String>>()
        .join("\n")
}
