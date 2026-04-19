#include "system.h"

int main() {
    try {
        Residential r;
        Hospital h;

        ConsumerUnit* c;

        c = &r;
        c->distributeWater(); // polymorphism

        c = &h;
        c->distributeWater();

        Pipeline p;
        p.pressure = 5;
        p.checkPressure();

    } catch (const char* msg) {
        cout << "Error: " << msg << endl;
    }

    // File handling
    ofstream file("data/usage.txt", ios::app);
    file << "Usage Recorded\n";
    file.close();

    return 0;
}