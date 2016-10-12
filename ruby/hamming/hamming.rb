class Hamming
  def self.compute(one, two)
    raise ArgumentError, 'your arguments should be of identical length' unless one.length == two.length
    0.upto(one.length).count { |i| one[i] != two[i] }
  end
end

module BookKeeping
  VERSION = 3
end
