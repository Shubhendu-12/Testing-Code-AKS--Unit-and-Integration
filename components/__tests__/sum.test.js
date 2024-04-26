const sum = (a,b)=>{
      return a +b;
}

test("Check sum of 2 positive numbers", () => {
    expect(sum(2, 5)).toBe(7);
  });