const express = require("express");
const app = express();
const port = 3000;

app.get("/:p1/:p2/:p3", (req, res) => {
  const p1 = parseInt(req.params.p1);
  const p2 = parseInt(req.params.p2);
  const p3 = parseInt(req.params.p3);

  if (
    !Number.isInteger(p1) ||
    !Number.isInteger(p2) ||
    !Number.isInteger(p3) ||
    p1 < 0 ||
    p2 < 0 ||
    p3 < 0 ||
    p1 > 30 ||
    p2 > 30 ||
    p3 > 30 ||
    p1 > p2 ||
    p2 > p3
  ) {
    return res.json({ max_draws: -1 });
  }

  // maxi draws
  const calculateMaxDraws = (p1, p2, p3) => {
    const totalPoints = p1 + p2 + p3;
    if (totalPoints % 2 !== 0) return -1;

    const totalGames = totalPoints / 2;

    if (p1 == p2 && p2 == p3) {
      const maxPossibleDraws = totalGames - Math.max(p3 - p2, p2 - p1, p1);

      return maxPossibleDraws >= 0 ? maxPossibleDraws : -1;
    } else {
      const maxPossibleDraws = totalGames;

      return maxPossibleDraws >= 0 ? maxPossibleDraws : -1;
    }
  };

  const maxDraws = calculateMaxDraws(p1, p2, p3);
  res.json({ max_draws: maxDraws });
});

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
module.exports = server;
