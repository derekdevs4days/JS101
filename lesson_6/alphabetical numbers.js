const data = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(arr) {
  arr.sort((a,b) => {
    let curr = a.data.indexOf(a);
    let next = a.data.indexOf(b);
    return curr - next
  })
}