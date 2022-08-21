import 'package:flutter/material.dart';

class Tips extends StatelessWidget {
  Tips({Key? key}) : super(key: key);

  final tipsList = [
    "Take folic acid and vitamin D supplements",
    "Consider having vaccinations that are offered",
    "Avoid diving or playing contact sports",
    "Don't eat unpasteurized milk products",
    "Don't sit in a hot tub or sauna",
    "Don't drink a lot of caffeine.",
    "Don't clean the cat's litter box",
    "Don't smoke",
    "Don't eat raw meat",
    "Monitor your baby’s movements",
    "Eat well and Stray active"
  ];

  @override
  Widget build(BuildContext context) {
    return Material(
      child: SingleChildScrollView(
          child: Column(
        children: [
          const SizedBox(
            height: 55,
          ),
          Row(
            children: [
              const SizedBox(
                width: 15,
              ),
              Image.asset(
                'assets/icons/icon.png',
                height: 45,
                width: 45,
              ),
              const SizedBox(
                width: 15,
              ),
              const Text(
                "Tips",
                style: TextStyle(
                  fontSize: 25,
                  fontWeight: FontWeight.w500,
                  color: Color.fromARGB(255, 47, 46, 65),
                ),
              ),
            ],
          ),
          const SizedBox(
            height: 30,
          ),
          Column(
            children: tipsList
                .map<Widget>((e) => Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 15, vertical: 10),
                      child: Container(
                        width: double.infinity,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          color: const Color.fromARGB(224, 175, 224, 226),
                        ),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(
                              vertical: 15, horizontal: 20),
                          child: Text(e),
                        ),
                      ),
                    ))
                .toList(),
          ),
        ],
      )),
    );
  }
}
