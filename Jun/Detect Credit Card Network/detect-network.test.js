const detectNetwork = require("./detect-network");

// Helper: generate a card number with the given prefix, padded with zeros to the target length
function makeCard(prefix, length) {
  const str = String(prefix);
  return str + "0".repeat(length - str.length);
}

describe("detectNetwork", () => {
  describe("Diner's Club", () => {
    test("prefix 38, length 14", () => {
      expect(detectNetwork(makeCard(38, 14))).toBe("Diner's Club");
    });

    test("prefix 39, length 14", () => {
      expect(detectNetwork(makeCard(39, 14))).toBe("Diner's Club");
    });
  });

  describe("American Express", () => {
    test("prefix 34, length 15", () => {
      expect(detectNetwork(makeCard(34, 15))).toBe("American Express");
    });

    test("prefix 37, length 15", () => {
      expect(detectNetwork(makeCard(37, 15))).toBe("American Express");
    });
  });

  describe("Visa", () => {
    test("prefix 4, length 13", () => {
      expect(detectNetwork(makeCard(4, 13))).toBe("Visa");
    });

    test("prefix 4, length 16", () => {
      expect(detectNetwork(makeCard(4, 16))).toBe("Visa");
    });

    test("prefix 4, length 19", () => {
      expect(detectNetwork(makeCard(4, 19))).toBe("Visa");
    });
  });

  describe("MasterCard", () => {
    for (let prefix = 51; prefix <= 55; prefix++) {
      test(`prefix ${prefix}, length 16`, () => {
        expect(detectNetwork(makeCard(prefix, 16))).toBe("MasterCard");
      });
    }
  });

  describe("Discover", () => {
    describe("prefix 6011", () => {
      test("length 16", () => {
        expect(detectNetwork(makeCard(6011, 16))).toBe("Discover");
      });

      test("length 19", () => {
        expect(detectNetwork(makeCard(6011, 19))).toBe("Discover");
      });
    });

    describe("prefix 65", () => {
      test("length 16", () => {
        expect(detectNetwork(makeCard(65, 16))).toBe("Discover");
      });

      test("length 19", () => {
        expect(detectNetwork(makeCard(65, 19))).toBe("Discover");
      });
    });

    describe("prefixes 644-649", () => {
      for (let prefix = 644; prefix <= 649; prefix++) {
        test(`prefix ${prefix}, length 16`, () => {
          expect(detectNetwork(makeCard(prefix, 16))).toBe("Discover");
        });
      }

      test("prefix 644, length 19", () => {
        expect(detectNetwork(makeCard(644, 19))).toBe("Discover");
      });

      test("prefix 649, length 19", () => {
        expect(detectNetwork(makeCard(649, 19))).toBe("Discover");
      });
    });

    describe("prefixes 622126-622925", () => {
      test("prefix 622126 (start of range), length 16", () => {
        expect(detectNetwork(makeCard(622126, 16))).toBe("Discover");
      });

      test("prefix 622925 (end of range), length 16", () => {
        expect(detectNetwork(makeCard(622925, 16))).toBe("Discover");
      });

      test("prefix 622500 (mid-range), length 16", () => {
        expect(detectNetwork(makeCard(622500, 16))).toBe("Discover");
      });

      test("prefix 622126, length 19", () => {
        expect(detectNetwork(makeCard(622126, 19))).toBe("Discover");
      });

      test("prefix 622925, length 19", () => {
        expect(detectNetwork(makeCard(622925, 19))).toBe("Discover");
      });
    });
  });

  describe("Maestro", () => {
    describe("prefix 50", () => {
      for (let length = 12; length <= 19; length++) {
        test(`length ${length}`, () => {
          expect(detectNetwork(makeCard(50, length))).toBe("Maestro");
        });
      }
    });

    describe("prefixes 56-59", () => {
      for (let prefix = 56; prefix <= 59; prefix++) {
        for (let length = 12; length <= 19; length++) {
          test(`prefix ${prefix}, length ${length}`, () => {
            expect(detectNetwork(makeCard(prefix, length))).toBe("Maestro");
          });
        }
      }
    });
  });

  describe("Edge cases", () => {
    test("empty string returns Unknown", () => {
      expect(detectNetwork("")).toBe("Unknown");
    });

    test("single digit returns Unknown", () => {
      expect(detectNetwork("9")).toBe("Unknown");
    });

    test("non-matching prefix returns Unknown", () => {
      expect(detectNetwork("1234567890123456")).toBe("Unknown");
    });

    test("prefix 4 with invalid length 10 returns Unknown", () => {
      expect(detectNetwork(makeCard(4, 10))).toBe("Unknown");
    });
  });
});
