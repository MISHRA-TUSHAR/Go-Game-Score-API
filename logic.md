
# Logic

### Parameters

- `p1`: Score of the first player.
- `p2`: Score of the second player.
- `p3`: Score of the third player.

### Steps to Calculate Maximum Draws

1. **Input Validation**
   - Ensure that `p1`, `p2`, and `p3` are integers.
   - Ensure that all scores are between 0 and 30, inclusive.
   - Ensure that the scores are in non-decreasing order: `p1 ≤ p2 ≤ p3`.

   If any of these conditions are not met, return `max_draws: -1`.

2. **Total Points and Games**
   - Calculate the total points: `totalPoints = p1 + p2 + p3`.
   - If `totalPoints` is odd, it's impossible to have all draws, so return `max_draws: -1`.
   - Calculate the total number of games: `totalGames = totalPoints / 2`.

3. **Max Possible Draws Calculation**
   - If all scores are equal (`p1 == p2 && p2 == p3`):
     - The maximum possible draws is calculated as:
       ```javascript
       maxPossibleDraws = totalGames - Math.max(p3 - p2, p2 - p1, p1);
       ```
     - Since `p1 == p2 == p3`, all differences are zero:
       ```javascript
       maxPossibleDraws = totalGames - Math.max(0, 0, 0) = totalGames;
       ```

   - If the scores are distinct and ordered (`p1 < p2 < p3`):
     - The maximum possible draws is calculated as:
       ```javascript
       maxPossibleDraws = totalGames - Math.max(p3 - p2, p2 - p1, p1);
       ```
     - This formula ensures that the function accurately accounts for the scenario where some games may not end in draws due to score differences.

4. **Return Result**
   - If `maxPossibleDraws` is non-negative, return `max_draws: maxPossibleDraws`.
   - Otherwise, return `max_draws: -1`.

## Example Calculations

### Equal Scores

#### Example: /0/0/0
- `p1 = p2 = p3 = 0`
- `totalPoints = 0 + 0 + 0 = 0`
- `totalGames = 0 / 2 = 0`
- `maxPossibleDraws = 0 - Math.max(0, 0, 0) = 0`
- **Result**: `max_draws: 0`

#### Example: /3/3/3
- `p1 = p2 = p3 = 3`
- `totalPoints = 3 + 3 + 3 = 9`
- `totalPoints` is odd, so return `max_draws: -1`

### Distinct Scores

#### Example: /1/2/3
- `p1 = 1`, `p2 = 2`, `p3 = 3`
- `totalPoints = 1 + 2 + 3 = 6`
- `totalGames = 6 / 2 = 3`
- `maxPossibleDraws = 3 - Math.max(3 - 2, 2 - 1, 1) = 3 - 1 = 2`
- **Result**: `max_draws: 2`

### Edge Cases

#### Example: /0/0/30
- `p1 = 0`, `p2 = 0`, `p3 = 30`
- `totalPoints = 0 + 0 + 30 = 30`
- `totalGames = 30 / 2 = 15`
- `maxPossibleDraws = 15 - Math.max(30 - 0, 0 - 0, 0) = 15 - 30 = -15`
- **Result**: `max_draws: -1`

#### Example: /0/10/20
- `p1 = 0`, `p2 = 10`, `p3 = 20`
- `totalPoints = 0 + 10 + 20 = 30`
- `totalGames = 30 / 2 = 15`
- `maxPossibleDraws = 15 - Math.max(20 - 10, 10 - 0, 0) = 15 - 10 = 5`
- **Result**: `max_draws: 5`

