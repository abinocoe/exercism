pub fn factors(n: u64) -> Vec<u64> {
    let mut f = vec![];
    let mut curr = 2;
    let mut remainder = n;
    while curr <= remainder {
        match remainder % curr {
            0 => {
                f.push(curr);
                remainder /= curr;
            }
            _ => curr += 1,
        }
    }
    f
}
