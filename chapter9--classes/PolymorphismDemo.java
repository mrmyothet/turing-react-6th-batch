public class Shape{
    public void draw(){
        System.out.println('Shape draw');
    }
}

public class Circle{
    public void draw(){
        System.out.println('Circle draw');
    }
}

public class Rectangle {
    public void draw(){
        System.out.println('Rectangle draw');
    }
}

public class Another {
    public void draw(){
        System.out.println('Rectangle draw');
    }
}

public class PolymorphismDemo
{
    public static void main(String[] args){
        Shape shape = new Circle();
        shape.draw();

        shape = new Rectangle();
        shape.draw();
        
    }
}