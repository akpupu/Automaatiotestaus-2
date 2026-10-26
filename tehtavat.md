# Tehtävät

## Tehtävä 1

Kirjoita testi, joka tarkistaa, että sähköpostiosoite ilman `@`-merkkiä hylätään.

Esimerkiksi: `opiskelija.example.com`

## Tehtävä 2

Kirjoita testi, joka tarkistaa, että liian lyhyt salasana hylätään.

Esimerkiksi: `sala123`

## Tehtävä 3

Kirjoita testi, joka tarkistaa, että vähintään 8 merkkiä pitkä salasana hyväksytään.

## Tehtävä 4

Kirjoita testi, joka tarkistaa, että ikä 18 hyväksytään.

## Tehtävä 5

Kirjoita testi, joka tarkistaa, että ikä 15 hylätään.

## Tehtävä 6

Kirjoita testi, joka tarkistaa, että ikä 121 hylätään.

## Tehtävä 7

Mieti, mitä tapahtuu seuraavissa tapauksissa, ja kirjoita niille testit:

- `validateEmail("")`
- `validatePassword("")`
- `validateAge("18")`
- `validateAge(18.5)`

## Tehtävä 8

Nykyinen `validateEmail()` on tarkoituksella hyvin yksinkertainen. Se hyväksyy esimerkiksi tämän:

`@test.`

Kirjoita ensin testi, joka osoittaa ongelman.

Muuta sen jälkeen `validateEmail()`-funktiota niin, että testisi menee läpi.
