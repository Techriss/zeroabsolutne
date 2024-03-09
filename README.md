![x](https://github.com/Techriss/zeroabsolutne/assets/64647259/83f02a19-518e-4696-8c45-52c8604a740a)
# Zero Absolutne
Bezpłatna platforma edukacyjna oferująca:
- Pełną teorię ze wszystkich działów fizyki szkół średnich
- Rozwiązane zadania z różnych zbiorów i waszych sugestii



Projekt Zero Absolutne jest **open-source** i przyjmuje propozycje zmian w postaci **pull requestów**.


### Dodawanie działów (do zadań i teorii)
1. Accent color (kolejne numerowanie) (./public/style.css)
2. Chapters list (./public/theory.html)
3. Chapters search (./public/ex.html)
4. JS loadFiles() endpoint fetch (./public/ex.html)



### Dodawanie zadań
1. Plik SVG (./public/img/ex/)
    - trudność (1 - łatwe, 2 - średnie, 3 - trudne)
    - dział (nazwa ze spacją)
    - nazwa zadania
    np. 1_Kinematyka_Zadanie 1.svg
2. Plik HTML (./public/ex/)
    - Description (treść polecenia)
    - Ścieżka do pliku SVG (wrapper ex_wrapper)



### Dodawanie teorii
1. Pliki SVG (./public/img/theory/)
    - folder działu (bez polskich znaków, wyrazy oddzielone _)
    - pliki svg każdego tematu nazwane kolejnymi numerami (zaczynając od 1)
2. Plik HTML (./public/theory/)
    - plik HTML działu (bez polskich znaków, wyrazy oddzielone _; taka sama jak folder działu w ./public/img/theory/)
    - chapter-banner accent color i tytuł działu (taki jak dodany do ./public/style.css)
    - tematy w sidebar (odpowiednie numerowanie id, accent color)
    - tematy i ścieżki do plików SVG w theory-wrapper


**każdy nowy plik HTML musi zostać dodany do ./public/sitemap.xml według wzoru**