class User
{
    constructor(id, name, surname, email, password)
    {
        this.id = id;
        this.name = name;
        this.sunrame = surname;
        this.email = email;
        this.password = password;
    }
    //Getters
    getName ()
    {
        return this.name;
    }

    getSurname ()
    {
        return this.surname;
    }

    getEmail ()
    {
        return this.email;
    }

    //Setters
    setEmail(email)
    {
        this.email = email;
    }

    setPassword(password)
    {
        this.password = password;
    }
}

class Manager extends User
{
    constructor(id, name, surname, email, password, type)
    {
        super(id,name,surname,email,password);
        this.type = type;
    }
    //Getters
    getType ()
    {
        return this.type;
    }
    //Setters
    setType (type)
    {
        if (type == "Manager")
        {
            return true;
        }
        else if (type == "Clerk")
        {
            this = new Clerk(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "QualityCheckEmployee")
        {
            this = new QualityCheckEmployee(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "DeliveryEmployee")
        {
            this = new DeliveryEmployee(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "Administrator")
        {
            this = new Administrator(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else
        {
            return false; //exception?
        }
    }
}

class Clerk extends User
{
    constructor(id, name, surname, email, password, type)
    {
        super(id,name,surname,email,password);
        this.type = type;
    }
    //Getters
    getType ()
    {
        return this.type;
    }
    //Setters
    setType (type)
    {
        if (type == "Manager")
        {
            this = new Manager(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type == "Clerk")
        {
            return true;
        }
        else if (type = "QualityCheckEmployee")
        {
            this = new QualityCheckEmployee(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "DeliveryEmployee")
        {
            this = new DeliveryEmployee(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "Administrator")
        {
            this = new Administrator(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else
        {
            return false; //exception?
        }
    }
}

class QualityCheckEmployee extends User
{
    constructor(id, name, surname, email, password, type)
    {
        super(id,name,surname,email,password);
        this.type = type;
    }
    //Getters
    getType ()
    {
        return this.type;
    }
    //Setters
    setType (type)
    {
        if (type == "Manager")
        {
            this = new Manager(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type == "Clerk")
        {
            this = new Clerk(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "QualityCheckEmployee")
        {
            return true;
        }
        else if (type = "DeliveryEmployee")
        {
            this = new DeliveryEmployee(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "Administrator")
        {
            this = new Administrator(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else
        {
            return false; //exception?
        }
    }
}

class DeliveryEmployee
{
    constructor(id, name, surname, email, password, type)
    {
        super(id,name,surname,email,password);
        this.type = type;
    }
    //Getters
    getType ()
    {
        return this.type;
    }
    //Setters
    setType (type)
    {
        if (type == "Manager")
        {
            this = new Manager(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type == "Clerk")
        {
            this = new Clerk(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "QualityCheckEmployee")
        {
            this = new QualityCheckEmployee(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "DeliveryEmployee")
        {
            return true;
        }
        else if (type = "Administrator")
        {
            this = new Administrator(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else
        {
            return false; //exception?
        }
    }
}

class Administrator extends User
{
    constructor(id, name, surname, email, password, type)
    {
        super(id,name,surname,email,password);
        this.type = type;
    }
    //Getters
    getType ()
    {
        return this.type;
    }
    //Setters
    setType (type)
    {
        if (type == "Manager")
        {
            this = new Manager(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type == "Clerk")
        {
            this = new Clerk(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "QualityCheckEmployee")
        {
            this = new QualityCheckEmployee(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "DeliveryEmployee")
        {
            this = new DeliveryEmployee(this.id, this.name, this.surname, this.email, this.password, type);
            return true;
        }
        else if (type = "Administrator")
        {
            return true;
        }
        else
        {
            return false; //exception?
        }
    }
}