use std::convert::TryInto;

pub fn nth(n: u32) -> u32 {
    let mut vec = Vec::new();
    for i in 2.. {
        if !vec.iter().any(|p| i % p == 0) {
            vec.push(i);
            if vec.len() - 1 == (n).try_into().unwrap() {
                break;
            }
        }
    }
    vec.pop().unwrap()
}
