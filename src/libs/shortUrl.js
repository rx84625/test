

const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const shortUrl = (i) => {
    
    // make your own alphabet using:
    // (('a'..'z').to_a + ('A'..'Z').to_a + (0..9).to_a).shuffle.join

    //   # from http://refactormycode.com/codes/125-base-62-encoding
    //   # with only minor modification
    if (i == 0) {
        return ALPHABET[0]
    }
    let s = ''
    const base = ALPHABET.length
    while (i > 0) {
        s += (ALPHABET[i % base])
        i = parseInt(i / base, 10)
    }

    return s.split("").reverse().join("");
    }

module.exports = shortUrl;