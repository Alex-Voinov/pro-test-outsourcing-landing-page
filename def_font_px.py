from tkinter  import Tk, Label, Button, Entry

window_width = 725
window_height = 520

root = Tk()
root.title("Адаптация макета")
root.configure(bg="black")
root.geometry(f"{window_width}x{window_height}")

active_button = 0
active_user_resolution = False

r_x = 0
r_y = 0

selects = [
    False, False, False, False, False, False,
    False, False, False, False, False, False,
    False, False, False,        False, False,
]

prop = (
    "width",
    "margin-left",
    "margin-right",
    "padding-left",
    "padding-right",
    "left",
    "height",
    "margin-top",
    "margin-bottom",
    "padding-top",
    "padding-bottom",
    "top",
    "font-size",
    "border-radius",
    "width css-var",
    "height css-var",
    "mix css-var",
)

value = 0
buttons = []
buttons2 = []
buttons3 = []

def copy_vw():
    vw = f'{round(int(value)*100/r_x, 5)}vw;'
    root.clipboard_clear()
    root.clipboard_append(vw)

def copy_vw2(prop):
    def inner_func():
        vw = f'{round(int(value)*100/r_x, 5)}vw;'
        root.clipboard_clear()
        root.clipboard_append(f'{prop.lower()}: {vw}')
    return inner_func

def copy_vh():
    vh = f'{round(int(value)*100/r_y, 5)}vh;'
    root.clipboard_clear()
    root.clipboard_append(vh)

def copy_vh2(prop):
    def inner_func():
        vh = f'{round(int(value)*100/r_y, 5)}vh;'
        root.clipboard_clear()
        root.clipboard_append(f'{prop.lower()}: {vh}')
    return inner_func

def copy_mix():
    v = f'min({round(int(value)*100/r_x, 5)}vw, {round(int(value)*100/r_y, 5)}vh);'
    root.clipboard_clear()
    root.clipboard_append(v)

def copy_mix2(prop):
    def inner_func():
        v = f'min({round(int(value)*100/r_x, 5)}vw, {round(int(value)*100/r_y, 5)}vh);'
        root.clipboard_clear()
        root.clipboard_append(f'{prop.lower()}: {v}')
    return inner_func

def switch_mode(option_mode):
    def inner_func():
        def on_entry_change(event):
            global value
            value = entryValue.get()
            if value.isdigit() or not value:
                if not value:
                    value = 0
                vh = f'{round(int(value)*100/r_y, 5)}vh'
                vw = f'{round(int(value)*100/r_x, 5)}vw'
                v = f'{round(int(value)*100/r_x, 3)}/{round(int(value)*100/r_y, 3)}'
                for button in buttons:
                    button.config(text=vw)
                for button in buttons2:
                    button.config(text=vh)
                for button in buttons3:
                    button.config(text=v)

            
        if r_x and r_y and any(selects):
            if not option_mode:
                button_1.grid_remove()
                button_2.grid_remove()
                button_3.grid_remove()
                button_4.grid_remove()
                button_5.grid_remove()
                button_6.grid_remove()
                button_7.grid_remove()
                button_8.grid_remove()
                button_9.grid_remove()
                button_10.grid_remove()
                button_11.grid_remove()
                button_12.grid_remove()
                button_13.grid_remove()
                button_14.grid_remove()
                button_15.grid_remove()
                button_16.grid_remove()
                button_17.grid_remove()
                button_18.grid_remove()
                button_19.grid_remove()
                button_20.grid_remove()
                button_21.grid_remove()
                button_22.grid_remove()  
                button_23.grid_remove()  
                settings_label.grid_remove() 
                settings_label_2.grid_remove() 
                settings_label_3.grid_remove() 
                settings_label_4.grid_remove()
                settings_label_6.grid_remove()
                entry1.grid_remove()
                entry2.grid_remove()

                process_label_1 = Label(root, text=f"Адаптируем величины под расширение {r_x}x{r_y}", bg="black", fg="white", font=("Helvetica", 18, "bold"))
                process_label_1.grid(row=0, column=0, padx=10, pady=10, sticky="nw")
                process_label_2 = Label(root, text=f"Величина", bg="black", fg="white", font=("Helvetica", 16, ""))
                process_label_2.grid(row=0, column=0, padx=15, pady=70, sticky="nw")
                entryValue = Entry(root, width=20, font=("Helvetica", 16, ""))
                entryValue.grid(row=0, column=0, padx=160, pady=70, sticky="nw")
                entryValue.bind("<KeyRelease>", on_entry_change)
                vh = f'{round(int(value)*100/r_y, 5)}vh'
                vw = f'{round(int(value)*100/r_x, 5)}vw'
                v = f'{round(int(value)*100/r_x, 3)}vw/{round(int(value)*100/r_y, 3)}vh'
                y = 140
                maxY = 0
                amount = 1
                for number, state in enumerate(selects):                   
                    if number in (0, 6, 12):
                        y = 140
                    if state:
                        if number < 6:
                            process_label = Label(root, text=prop[number], bg="black", fg="white", font=("Helvetica", 12, ""))
                            process_label.grid(row=0, column=0, padx=20, pady=y, sticky="nw")
                            buttons.append(Button(root, text=vw, command=copy_vw, bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=10))
                            buttons[-1].grid(row=0, column=0, padx=140, pady=y-5, sticky="nw")
                            b = Button(root, text='copy', command=copy_vw2(prop[number]), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=10)
                            b.grid(row=0, column=0, padx=250, pady=y-5, sticky="nw")
                        elif  number < 12:
                            process_label = Label(root, text=prop[number], bg="black", fg="white", font=("Helvetica", 12, ""))
                            process_label.grid(row=0, column=0, padx=365, pady=y, sticky="nw")
                            buttons2.append(Button(root, text=vh, command= copy_vh, bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=10))
                            buttons2[-1].grid(row=0, column=0, padx=490, pady=y-5, sticky="nw")
                            process_button_copy = Button(root, text='copy', command=copy_vh2(prop[number]), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=10)
                            process_button_copy.grid(row=0, column=0, padx=600, pady=y-5, sticky="nw")
                        else:
                            process_label = Label(root, text=prop[number], bg="black", fg="white", font=("Helvetica", 12, ""))
                            process_label.grid(row=0, column=0, padx=20 + 345 * (amount % 2), pady=maxY + (y - 180)*2  + 100 * (amount % 2), sticky="nw")
                            buttons3.append(Button(root, text=v, command=copy_mix, bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=10))
                            buttons3[-1].grid(row=0, column=0, padx=140 + 345 * (amount % 2), pady=maxY + (y- 180)*2  + 100 * (amount % 2) - 5, sticky="nw")
                            process_button_copy = Button(root, text='copy', command=copy_mix2(prop[number]), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=10)
                            process_button_copy.grid(row=0, column=0, padx=250 + 345 * (amount % 2), pady=maxY + (y- 180)*2  + 100 * (amount % 2) - 5, sticky="nw")
                            amount += 1
                            if amount%2: y -= 70
                        y += 50
                        maxY = max(y, maxY)
                        if (maxY + (y- 70)*2  - 100 * (amount % 2) +45)>window_height:
                            root.geometry(f"{window_width}x{(maxY + (y- 140)*2  + 100 * (amount % 2) +45)}")




    return inner_func


def select_prop(num):
    def inner_func():
        selects[num-6] = not selects[num-6]
        color = '#009aad' if selects[num-6] else 'black'
        match num:
            case 6:
               button_6.config(bg=color) 
            case 7:
               button_7.config(bg=color) 
            case 8:
               button_8.config(bg=color) 
            case 9:
               button_9.config(bg=color) 
            case 10:
               button_10.config(bg=color) 
            case 11:
               button_11.config(bg=color) 
            case 12:
               button_12.config(bg=color) 
            case 13:
               button_13.config(bg=color) 
            case 14:
               button_14.config(bg=color) 
            case 15:
               button_15.config(bg=color) 
            case 16:
               button_16.config(bg=color) 
            case 17:
               button_17.config(bg=color) 
            case 18:
               button_18.config(bg=color) 
            case 19:
               button_19.config(bg=color)
            case 20:
               button_20.config(bg=color) 
            case 21:
               button_21.config(bg=color) 
            case 22:
               button_22.config(bg=color) 
    return inner_func


def select_user_resolve():
    r_x = entry1.get()
    r_y = entry2.get()
    if r_x and r_y and r_x.isdigit() and r_y.isdigit(): 
        settings_label_3.config(fg='white')
        setup_screen_resolution(r_x, r_y,d='Owner')
        entry1.grid_remove()
        entry2.grid_remove()
        button_5.grid_remove()
    else:
        settings_label_3.config(text=f'Неккоректные значения:            x')
        settings_label_3.config(fg='red')

def setup_screen_resolution(w=0,h=0,d=0):
   global r_x, r_y
   settings_label_3.config(fg='white')
   if not (h and d and w):
       settings_label_3.config(text=f'Введите ваши значения:             x')
   else:
        r_x = w 
        r_y = h
        settings_label_3.config(text=f'{d}: {r_x}x{r_y}')

def on_button_click(button_number): 
    def inner_func():
        global active_button
        if active_button:
           match active_button:
            case 1:
                button_1.config(bg="black")
            case 2:
                button_2.config(bg="black")
            case 3:
                button_3.config(bg="black")
            case 4:
                button_4.config(bg="black")
                entry1.grid_remove()
                entry2.grid_remove()
                button_5.grid_remove()
        match button_number:
            case 1:
                button_1.config(bg="#009aad")
                setup_screen_resolution(1920, 1080, 'Desctop') 
            case 2:
                button_2.config(bg="#009aad")
                setup_screen_resolution(772, 926, 'Tablet')
            case 3:
                button_3.config(bg="#009aad")
                setup_screen_resolution(374, 812, 'Mobile')
            case 4:
                button_4.config(bg="#009aad")
                setup_screen_resolution()
                entry1.grid(row=0, column=0, padx=490, pady=103, sticky="nw")
                entry2.grid(row=0, column=0, padx=545, pady=103, sticky="nw")
                button_5.grid(row=0, column=0, padx=605, pady=97, sticky="nw")
        active_button = button_number
            
    return inner_func

settings_label = Label(root, text="Настройки", bg="black", fg="white", font=("Helvetica", 18, "bold"))
settings_label.grid(row=0, column=0, padx=10, pady=10, sticky="nw")

settings_label_2 = Label(root, text="Использовать по умолчанию", bg="black", fg="white", font=("Helvetica", 12))
settings_label_2.grid(row=0, column=0, padx=15, pady=60, sticky="nw")

button_1 = Button(root, text="Desctop", command=on_button_click(1), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3)
button_1.grid(row=0, column=0, padx=300, pady=55, sticky="nw")

button_2 = Button(root, text="Tablet", command=on_button_click(2), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3)
button_2.grid(row=0, column=0, padx=390, pady=55, sticky="nw")

button_3 = Button(root, text="Mobile", command=on_button_click(3), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3)
button_3.grid(row=0, column=0, padx=465, pady=55, sticky="nw")

button_4 = Button(root, text="Owner", command=on_button_click(4), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3)
button_4.grid(row=0, column=0, padx=544, pady=55, sticky="nw")

settings_label_6 = Label(root, text="Расширение макета", bg="black", fg="white", font=("Helvetica", 12))
settings_label_6.grid(row=0, column=0, padx=15, pady=100, sticky="nw")

settings_label_3 = Label(root, text="не выбрано", bg="black", fg="white", font=("Helvetica", 12))
settings_label_3.grid(row=0, column=0, padx=300, pady=100, sticky="nw")

entry1 = Entry(root, width=5)
entry2 = Entry(root, width=5)

button_5 = Button(root, text="select", command=select_user_resolve, bg="black", fg="white", font=("Helvetica", 10), borderwidth=3, width=8)

settings_label_4 = Label(root, text="Отображаемые свойства", bg="black", fg="white", font=("Helvetica", 12))
settings_label_4.grid(row=0, column=0, padx=15, pady=140, sticky="nw")

button_6 = Button(root, text="Width", command=select_prop(6), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_6.grid(row=0, column=0, padx=50, pady=175, sticky="nw")

button_7 = Button(root, text="Margin-left", command=select_prop(7), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_7.grid(row=0, column=0, padx=50, pady=225, sticky="nw")

button_8 = Button(root, text="Margin-Right", command=select_prop(8), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_8.grid(row=0, column=0, padx=50, pady=275, sticky="nw")

button_9 = Button(root, text="Padding-left", command=select_prop(9), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_9.grid(row=0, column=0, padx=50, pady=325, sticky="nw")

button_10 = Button(root, text="Padding-right", command=select_prop(10), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_10.grid(row=0, column=0, padx=50, pady=375, sticky="nw")

button_11 = Button(root, text="Left", command=select_prop(11), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_11.grid(row=0, column=0, padx=50, pady=425, sticky="nw")



button_12 = Button(root, text="Height", command=select_prop(12), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_12.grid(row=0, column=0, padx=275, pady=175, sticky="nw")

button_13 = Button(root, text="Margin-top", command=select_prop(13), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_13.grid(row=0, column=0, padx=275, pady=225, sticky="nw")

button_14 = Button(root, text="Margin-bottom", command=select_prop(14), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_14.grid(row=0, column=0, padx=275, pady=275, sticky="nw")

button_15 = Button(root, text="Padding-top", command=select_prop(15), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_15.grid(row=0, column=0, padx=275, pady=325, sticky="nw")

button_16 = Button(root, text="Padding-bottom", command=select_prop(16), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_16.grid(row=0, column=0, padx=275, pady=375, sticky="nw")

button_17 = Button(root, text="Top", command=select_prop(17), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_17.grid(row=0, column=0, padx=275, pady=425, sticky="nw")


button_18 = Button(root, text="Font-size", command=select_prop(18), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_18.grid(row=0, column=0, padx=500, pady=175, sticky="nw")

button_19 = Button(root, text="Border-radius", command=select_prop(19), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_19.grid(row=0, column=0, padx=500, pady=225, sticky="nw")


button_20 = Button(root, text="Width css-var", command=select_prop(20), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_20.grid(row=0, column=0, padx=500, pady=325, sticky="nw")

button_21 = Button(root, text="Height css-var", command=select_prop(21), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_21.grid(row=0, column=0, padx=500, pady=375, sticky="nw")

button_22 = Button(root, text="Mix css-var", command=select_prop(22), bg="black", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_22.grid(row=0, column=0, padx=500, pady=425, sticky="nw")

button_23 = Button(root, text="Save", command=switch_mode(False), bg="gray", fg="white", font=("Helvetica", 12), borderwidth=3, width=20)
button_23.grid(row=0, column=0, padx=275, pady=480, sticky="nw")



root.lift()
root.attributes('-topmost', True)
root.mainloop()


