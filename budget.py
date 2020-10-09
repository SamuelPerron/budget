from datetime import date, datetime

def flatten_dict(dict_to_flatten):
    result = []
    for item in dict_to_flatten:
        if type(dict_to_flatten[item]) == type({}):
            for sub_item in dict_to_flatten[item]:
                result.append(dict_to_flatten[item][sub_item])
        else:
            result.append(dict_to_flatten[item])
    return result


class Budget:
    pay = 1465.41
    needs = {
        'rent': 293.75, 'groceries': 127.54, 'gas': 73.9,
        'personal_care': {'haircut': 15}, 'car_loan': 187.29, 'insurance': 79.21,
        'utilities': {'internet': 43.09, 'cellphone': 12.5, 'bank_account': 5.48}
    }
    wants = { 'food': 99.09, 'activities': 2.88, 'clothing': 2.66, 'new_things': 37.24, 'buffer': 20 }
    savings = { 'tfsa_home': 175, 'tfsa_savings': 0, 'reer': 100, 'goals': 0 }
    interest_rates = { 'tfsa':  0.00193692308, 'reer': 0.00193692308, 'savings': 0.00346153846 }

    def __init__(self):
        self.compute_tfsa_savings()

    def __str__(self):
        return f"""
            Incomes: {self.incomes}
            Needs: {self.total_needs}
            Wants: {self.total_wants}
            Savings: {self.total_savings}
            Surplus: {self.surplus}
        """

    @property
    def incomes(self):
        return self.pay

    @property
    def total_needs(self):
        return sum(flatten_dict(self.needs))

    @property
    def total_wants(self):
        return sum(flatten_dict(self.wants))

    @property
    def outgoings(self):
        return self.total_needs + self.total_wants

    @property
    def total_savings(self):
        return sum(flatten_dict(self.savings))

    @property
    def surplus(self):
        return self.incomes - (self.outgoings + self.total_savings)

    def compute_tfsa_savings(self):
        self.savings['tfsa_savings'] = self.surplus

    def simulate(self, nb_periods):
        results = { 'tfsa_home': 0, 'tfsa_savings': 0, 'reer': 0 }
        for period in range(1, nb_periods + 1):
            if period:
                results = {
                    'tfsa_home': results['tfsa_home'] + self.savings['tfsa_home'] + (results['tfsa_home'] * self.interest_rates['tfsa']),
                    'tfsa_savings': results['tfsa_savings'] + self.savings['tfsa_savings'] + (results['tfsa_savings'] * self.interest_rates['tfsa']),
                    'reer': results['reer'] + self.savings['reer'] + (results['reer'] * self.interest_rates['reer']),
                }
        return results

    def calculate_payments_goal(self, goal, deadline):
        today = date.today()
        deadline = datetime.strptime(deadline, '%Y-%m-%d').date()
        diff_in_period = ((deadline - today).days / 7) / 2
        goal_minus_interest = goal - (goal * self.interest_rates['savings']) * diff_in_period
        deposit = goal_minus_interest / diff_in_period
        return deposit


b = Budget()

print(b.calculate_payments_goal(3000, '2021-05-01'))
