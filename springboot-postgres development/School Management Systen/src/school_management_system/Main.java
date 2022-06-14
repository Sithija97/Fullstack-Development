package school_management_system;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        Student sithija = new Student(1, "Sithia", 11);
        Student ruchira = new Student(2, "Ruchira", 11);
        Student isuru = new Student(3, "Isuru", 11);
        Student malith = new Student(4, "Malith", 11);

        List <Student> students = new ArrayList<>();
                students.add(sithija);
                students.add(ruchira);
                students.add(isuru);
                students.add(malith);

        Teacher Mr_Indika = new Teacher(1, "Indika", "Maths", 5000);
        Teacher Mrs_Wasantha = new Teacher(2, "Wasantha", "English", 5000);
        Teacher Mrs_Chandrani = new Teacher(3, "Chandrani", "Science", 5000);

        List<Teacher> teachers = new ArrayList<>();
        teachers.add(Mr_Indika);
        teachers.add(Mrs_Wasantha);
        teachers.add(Mrs_Chandrani);

        School vmv = new School(teachers, students);
        sithija.setFeesPaid(2000);
        ruchira.setFeesPaid(1000);
        isuru.setFeesPaid(2000);
        malith.setFeesPaid(1500);
        System.out.println("total money earned by school :"+vmv.getTotalMoneyEarned());
    }
}
