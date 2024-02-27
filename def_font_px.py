while True:
    font = float(input())
    r_x = 1920
    r_y = 1080
    print(f'Для {font}px:')
    print()
    print(f'\tmargin-left: {round(font*100/r_x, 5)}vw;')
    print(f'\twidth: {round(font*100/r_x, 5)}vw;')
    print()
    print(f'\tmargin-top: {round(font*100/r_y, 5)}vh;')
    print(f'\theight: {round(font*100/r_y, 5)}vh;')
    print()
    print(f'\tfont-size: min({round(font*100/r_x, 5)}vw, {round(font*100/r_y, 5)}vh);')
    