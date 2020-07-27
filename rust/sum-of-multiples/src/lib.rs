pub fn sum_of_multiples(limit: u32, factors: &[u32]) -> u32 {
    (1..limit)
        .filter(|x| factors.iter().any(|&z| z > 0 && x % z == 0))
        .sum()
}
