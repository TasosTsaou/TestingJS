(window.palindromeTest = function () {

    //1. A single or zero-character string is a palindrome.
    //2. Any other string is a palindrome if the first and last characters are the same, and the string that remains, excepting those characters, is a palindrome.
    function isPalindrome(text) {
        if (text.length <= 1) return true;
        if (text.charAt(0) != text.charAt(text.length - 1)) return false;
        return isPalindrome(text.substr(1, text.length - 2));
    }

    assert(isPalindrome("w"), "Single char String 'w' is a palindrome, as expected");

    assert(isPalindrome("abba"), "String 'abba' is a palindrome, as expected");

})