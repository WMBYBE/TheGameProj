import pyxel

class App:
    def __init__(self):
        pyxel.init(160, 120, title="Shrimp Click")
        pyxel.load("PYXEL_RESOURCE_FILE.pyxres")
        self.reset()
        pyxel.run(self.update, self.draw)

    def reset(self):
        self.player_x = 80
        self.player_y = 110
        self.is_alive = True
        self.on_log = False
        self.game_won = False
        self.cars = [(20,80), (120, 75)]
        self.trucks = [(90, 50), (70, 40)]
        self.crab = [(80,10)]

    def update(self):
        if self.is_alive:
            self.update_player()
            self.update_cars()
            self.update_trucks()
            self.collision()
        elif pyxel.btnp(pyxel.KEY_R):
            self.reset()


    def update_player(self):
        if pyxel.btnp(pyxel.KEY_RIGHT) and self.player_x < 150:
            self.player_x += 10
        if pyxel.btnp(pyxel.KEY_LEFT) and self.player_x > 0:
            self.player_x -= 10
        if pyxel.btnp(pyxel.KEY_UP) and self.player_y > 0:
            self.player_y -= 10
        if pyxel.btnp(pyxel.KEY_DOWN) and self.player_y < 110:
            self.player_y += 10

    def update_cars(self):
        for i, (x,y) in enumerate(self.cars):
            x += 2
            if x > 160:
                x = -20
            self.cars[i] = (x,y)
    def update_trucks(self):
        for i, (x,y) in enumerate(self.trucks):
            x += 2
            if x > 160:
                x = -20
            self.trucks[i] = (x,y)
        
    
    def collision(self):
        for (x,y) in self.cars:
            if abs(self.player_x - x) < 16 and abs(self.player_y - y) < 16:
                self.is_alive = False
        for (x,y) in self.trucks:
            if abs(self.player_x - x) < 16 and abs(self.player_y - y) < 16:
                self.is_alive = False

        if self.player_y == 10 and self.player_x == 80:
            self.is_alive = False
            self.game_won = True
            pyxel.js("notifyWin()")

    def draw(self):
        pyxel.cls(5)
        # Draw player
        pyxel.blt(self.player_x, self.player_y, 0, 16,16,16,16)
        for (x,y) in self.crab:
            pyxel.blt(x,y,0, 32,32,16,16)

        for (x,y) in self.cars:
            pyxel.blt(x, y,0 , 32, 16, 16, 16)
        for (x,y) in self.trucks:
            pyxel.blt(x, y,0 , 48, 16, 16, 16)

        if self.game_won:
            pyxel.text(60, 60, "YOU WIN", pyxel.COLOR_YELLOW)

        elif not self.is_alive:
            pyxel.text(60, 60, "GAME OVER", pyxel.COLOR_RED)
            pyxel.text(50,80, "R to Restart", pyxel.COLOR_WHITE)

App()