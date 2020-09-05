# Latihan 1

## Masalah

Tiba akhir tahun. Toko Jack makin berkembang pesat. Jack ingin memberikan diskon akhir tahun kepada para pelanggannya. Jack butuh program yang dapat memberikan harga setelah diskon.

## Clue

- Method `.split`
- Method `.map`
- Method `.reduce`
- Method `.substr`
- Method `.join`
- Fungsi `parseInt`
- Property `.length`
- Tanpa `while` & `for`
- Template literals (strings)
- Operator aritmatika
- Operator precedence

## Spesimen

**Format:**

```
<price> <discount>
```

### Test 1

**Input:**

```
30000 50%
17000 10%
26000 30%
58000 90%
1000 50%
7000 25%
```

**Output:**

```
30000 x 50% => 15000
17000 x 10% => 15300
26000 x 30% => 18200
58000 x 90% => 5800
1000 x 50% => 500
7000 x 25% => 5250
```

### Test 2

**Input:**

```
88000 55%
92000 15%
34500 25%
81200 70%
87800 10%
700 25%
7500 100%
450000 65%
28800 15%
10000 10%
```

**Output:**

```
88000 x 55% => 39600
92000 x 15% => 78200
34500 x 25% => 25875
81200 x 70% => 24360
87800 x 10% => 79020
700 x 25% => 525
7500 x 100% => 0
450000 x 65% => 157500
28800 x 15% => 24480
10000 x 10% => 9000
```
