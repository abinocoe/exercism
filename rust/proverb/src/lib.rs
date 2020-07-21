pub fn build_proverb(list: &[&str]) -> String {
    let mut result = String::new();
    for (index, word) in list.iter().enumerate() {
        match list.len() - index {
            0 => break,
            1 => result += &(format!("And all for the want of a {}.", list[0])),
            _ => result += &(format!("For want of a {} the {} was lost.\n", word, list[index + 1])),
        }
    }
    result
}
