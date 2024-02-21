font = int(input())
r_x = 1920
r_y = 1080
print(f'min({round(font*100/r_x, 5)}vw, {round(font*100/r_y, 5)}vh)')