pub fn raindrops(n: u32) -> String {
    let mut string = String::new();
    if n % 3 == 0 {
        string.push_str("Pling");
    }
    if n % 5 == 0 {
        string.push_str("Plang");
    }
    if n % 7 == 0 {
        string.push_str("Plong");
    }
    if string.is_empty() {
        string = n.to_string();
    }
    string
}
