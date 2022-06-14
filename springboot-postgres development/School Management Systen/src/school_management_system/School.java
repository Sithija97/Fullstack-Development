package school_management_system;

import java.util.List;

public class School {

    private List <Teacher> teachers;
    private List <Student> students;
    private static int totalMoneyEarned;
    private static int totalMoneySpent;

    public School(List <Teacher> teachers, List <Student> students) {
        this.teachers = teachers;
        this.students = students;
        totalMoneyEarned = 0;
        totalMoneySpent = 0;
    }

    public List<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(Teacher teacher) {
        teachers.add(teacher);
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(Student student) {
        this.students.add(student);
    }

    public int getTotalMoneyEarned() {
        return totalMoneyEarned;
    }

    public static void setTotalMoneyEarned(int moneyEarned) {
        totalMoneyEarned += moneyEarned;
    }

    public int getTotalMoneySpent() {
        return totalMoneySpent;
    }

    public void setTotalMoneySpent(int moneySpent) {
        this.totalMoneySpent -= moneySpent;
    }
}