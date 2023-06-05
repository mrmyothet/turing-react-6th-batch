class Shape {
    public void draw() {
        System.out.println("Shape draw");
    }
}

class Circle extends Shape {
    public void draw() {
        System.out.println("Circle draw");
    }
}

class Rectangle extends Shape {
    public void draw() {
        System.out.println("Rectangle draw");
    }
}

class Another {
    public void draw() {
        System.out.println("Rectangle draw");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Shape shape = new Circle();
        shape.draw();

        shape = new Rectangle();
        shape.draw();

    }
}