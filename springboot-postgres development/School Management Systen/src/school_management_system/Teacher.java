package school_management_system;

public class Teacher {

    private int id;
    private String name;
    private String subject;
    private int salary;

    public Teacher(int id, String name, String subject, int salary) {
        this.id = id;
        this.name = name;
        this.subject = subject;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }
}
